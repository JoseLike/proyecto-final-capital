"""empty message

Revision ID: f6a3e3e6cf94
Revises: 
Create Date: 2022-06-21 17:28:38.586365

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f6a3e3e6cf94'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('usertype',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_premium', sa.Boolean(), nullable=False),
    sa.Column('country', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=True),
    sa.Column('user_type', sa.Integer(), nullable=False),
    sa.Column('is_company', sa.Boolean(), nullable=True),
    sa.Column('profile_picture', sa.String(length=120), nullable=True),
    sa.Column('longevity', sa.Date(), nullable=True),
    sa.Column('inversor_type', sa.String(length=120), nullable=True),
    sa.Column('acepted_conditions', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['user_type'], ['usertype.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('project',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=80), nullable=False),
    sa.Column('concept', sa.String(length=120), nullable=False),
    sa.Column('desired_capital', sa.Integer(), nullable=False),
    sa.Column('raised_capital', sa.Integer(), nullable=True),
    sa.Column('invested_capital', sa.Integer(), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.Column('deadline', sa.Date(), nullable=True),
    sa.Column('loans', sa.Integer(), nullable=False),
    sa.Column('business_plan', sa.Text(), nullable=False),
    sa.Column('patent', sa.Boolean(), nullable=False),
    sa.Column('terms', sa.Boolean(), nullable=False),
    sa.Column('project_files', sa.String(length=120), nullable=True),
    sa.Column('project_picture', sa.String(length=120), nullable=True),
    sa.Column('investment_capacity', sa.String(length=120), nullable=True),
    sa.Column('views', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('project_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mensajes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('project_id', sa.Integer(), nullable=True),
    sa.Column('sender_id', sa.Integer(), nullable=True),
    sa.Column('receiver_id', sa.Integer(), nullable=True),
    sa.Column('text', sa.Text(), nullable=False),
    sa.Column('subject', sa.String(length=120), nullable=False),
    sa.Column('readed', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.ForeignKeyConstraint(['receiver_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['sender_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mensajes')
    op.drop_table('favorites')
    op.drop_table('project')
    op.drop_table('user')
    op.drop_table('usertype')
    op.drop_table('category')
    # ### end Alembic commands ###
