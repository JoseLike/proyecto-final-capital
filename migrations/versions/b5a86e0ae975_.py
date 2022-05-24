"""empty message

Revision ID: b5a86e0ae975
Revises: e16cd680ffb7
Create Date: 2022-05-19 14:28:02.785447

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b5a86e0ae975'
down_revision = 'e16cd680ffb7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('category', 'project_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('category', 'project_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
