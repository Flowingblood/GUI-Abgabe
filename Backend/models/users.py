# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from models.base_model_ import Model
import util
from models.user import User


class Users(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, user_container: List[User] = None):  # noqa: E501
        """Users - a model defined in Swagger

        :param user_container: The user_container of this Users.  # noqa: E501
        :type user_container: List[User]
        """
        self.swagger_types = {
            'user_container': List[User]
        }

        self.attribute_map = {
            'user_container': 'userContainer'
        }

        self._user_container = user_container

    @classmethod
    def from_dict(cls, dikt) -> 'Users':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Users of this Users.  # noqa: E501
        :rtype: Users
        """
        return util.deserialize_model(dikt, cls)

    @property
    def user_container(self) -> List[User]:
        """Gets the user_container of this Users.

        Container for user  # noqa: E501

        :return: The user_container of this Users.
        :rtype: List[User]
        """
        return self._user_container

    @user_container.setter
    def user_container(self, user_container: List[User]):
        """Sets the user_container of this Users.

        Container for user  # noqa: E501

        :param user_container: The user_container of this Users.
        :type user_container: List[User]
        """

        self._user_container = user_container
