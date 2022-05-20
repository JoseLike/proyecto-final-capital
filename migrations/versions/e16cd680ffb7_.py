"""empty message

Revision ID: e16cd680ffb7
Revises: e28ec5d0a896
Create Date: 2022-05-19 14:20:33.897909

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e16cd680ffb7'
down_revision = 'e28ec5d0a896'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('category', sa.Column('project_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'category', 'project', ['project_id'], ['id'])
    op.drop_constraint('project_category_fkey', 'project', type_='foreignkey')
    op.drop_column('project', 'category')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('project', sa.Column('category', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('project_category_fkey', 'project', 'category', ['category'], ['id'])
    op.drop_constraint(None, 'category', type_='foreignkey')
    op.drop_column('category', 'project_id')
    # ### end Alembic commands ###